import React, { useState, useEffect } from "react";
import { Form } from "@/entities/Form";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, Save, Plus, Trash2, GripVertical } from "lucide-react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

export default function FormBuilder() {
  const navigate = useNavigate();
  const [formId, setFormId] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [submitUrl, setSubmitUrl] = useState("");
  const [status, setStatus] = useState("draft");
  const [fields, setFields] = useState([]);
  const [selectedFieldId, setSelectedFieldId] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    if (id) {
      loadForm(id);
      setFormId(id);
    }
  }, []);

  const loadForm = async (id) => {
    const forms = await Form.list();
    const form = forms.find(f => f.id === id);
    if (form) {
      setTitle(form.title);
      setDescription(form.description || "");
      setSubmitUrl(form.submit_url || "");
      setStatus(form.status);
      setFields(form.schema?.fields || []);
    }
  };

  const handleSave = async () => {
    const data = {
      title,
      description,
      submit_url: submitUrl,
      status,
      schema: { fields }
    };

    if (formId) {
      await Form.update(formId, data);
    } else {
      const newForm = await Form.create(data);
      setFormId(newForm.id);
      navigate(`${createPageUrl("FormBuilder")}?id=${newForm.id}`);
    }
    alert("Form saved!");
  };

  const addField = (type) => {
    const newField = {
      id: `field_${Date.now()}`,
      type,
      label: `New ${type} field`,
      placeholder: "",
      required: false,
      options: type === "select" || type === "radio" ? ["Option 1", "Option 2"] : undefined
    };
    setFields([...fields, newField]);
    setSelectedFieldId(newField.id);
  };

  const updateField = (id, updates) => {
    setFields(fields.map(f => f.id === id ? { ...f, ...updates } : f));
  };

  const deleteField = (id) => {
    setFields(fields.filter(f => f.id !== id));
    setSelectedFieldId(null);
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(fields);
    const [reordered] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reordered);
    setFields(items);
  };

  const selectedField = fields.find(f => f.id === selectedFieldId);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="border-b bg-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate(createPageUrl("Forms"))}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <Input
              placeholder="Form Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-xl font-semibold border-none shadow-none"
            />
          </div>
          <Button onClick={handleSave} disabled={!title} className="bg-indigo-600 hover:bg-indigo-700">
            <Save className="w-4 h-4 mr-2" />
            Save
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-[300px,1fr,300px] gap-6">
          {/* Field Types */}
          <Card>
            <CardHeader className="border-b">
              <h3 className="font-semibold">Add Fields</h3>
            </CardHeader>
            <CardContent className="p-4 space-y-2">
              {["text", "email", "number", "textarea", "select", "checkbox", "radio"].map(type => (
                <Button
                  key={type}
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => addField(type)}
                >
                  {type}
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* Canvas */}
          <Card>
            <CardHeader className="border-b">
              <h3 className="font-semibold">Form Preview</h3>
            </CardHeader>
            <CardContent className="p-6">
              {fields.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  Add fields from the left panel
                </div>
              ) : (
                <DragDropContext onDragEnd={onDragEnd}>
                  <Droppable droppableId="fields">
                    {(provided) => (
                      <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-4">
                        {fields.map((field, index) => (
                          <Draggable key={field.id} draggableId={field.id} index={index}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                className={`p-4 border-2 rounded-lg cursor-pointer ${
                                  selectedFieldId === field.id ? "border-indigo-500 bg-indigo-50" : "border-gray-200"
                                }`}
                                onClick={() => setSelectedFieldId(field.id)}
                              >
                                <div className="flex items-start gap-3">
                                  <div {...provided.dragHandleProps} className="mt-1">
                                    <GripVertical className="w-5 h-5 text-gray-400" />
                                  </div>
                                  <div className="flex-1">
                                    <div className="font-medium mb-2">
                                      {field.label}
                                      {field.required && <span className="text-red-500 ml-1">*</span>}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                      Type: {field.type}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
              )}
            </CardContent>
          </Card>

          {/* Field Editor */}
          <Card>
            <CardHeader className="border-b">
              <h3 className="font-semibold">Field Settings</h3>
            </CardHeader>
            <CardContent className="p-4">
              {!selectedField ? (
                <div className="text-center py-8 text-gray-500">
                  Select a field to edit
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <Label>Label</Label>
                    <Input
                      value={selectedField.label}
                      onChange={(e) => updateField(selectedField.id, { label: e.target.value })}
                    />
                  </div>

                  {!["checkbox", "radio"].includes(selectedField.type) && (
                    <div>
                      <Label>Placeholder</Label>
                      <Input
                        value={selectedField.placeholder || ""}
                        onChange={(e) => updateField(selectedField.id, { placeholder: e.target.value })}
                      />
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <Label>Required</Label>
                    <Switch
                      checked={selectedField.required}
                      onCheckedChange={(checked) => updateField(selectedField.id, { required: checked })}
                    />
                  </div>

                  {(selectedField.type === "select" || selectedField.type === "radio") && (
                    <div>
                      <Label>Options (one per line)</Label>
                      <Textarea
                        value={(selectedField.options || []).join("\n")}
                        onChange={(e) => updateField(selectedField.id, { options: e.target.value.split("\n") })}
                        className="h-32"
                      />
                    </div>
                  )}

                  <Button
                    variant="destructive"
                    className="w-full"
                    onClick={() => deleteField(selectedField.id)}
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete Field
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Settings */}
        <Card className="mt-6 max-w-2xl mx-auto">
          <CardHeader className="border-b">
            <h3 className="font-semibold">Form Settings</h3>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div>
              <Label>Description</Label>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe this form..."
              />
            </div>

            <div>
              <Label>Submit URL (optional)</Label>
              <Input
                value={submitUrl}
                onChange={(e) => setSubmitUrl(e.target.value)}
                placeholder="https://your-api.com/endpoint"
                type="url"
              />
              <p className="text-xs text-gray-500 mt-1">
                Form data will be POSTed here
              </p>
            </div>

            <div>
              <Label>Status</Label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}