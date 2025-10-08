import React, { useState, useEffect } from "react";
import { Form } from "@/entities/Form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Plus, Search, Edit, Trash2, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

export default function Forms() {
  const navigate = useNavigate();
  const [forms, setForms] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    loadForms();
  }, []);

  const loadForms = async () => {
    const data = await Form.list("-created_date");
    setForms(data);
  };

  const filteredForms = forms.filter(form =>
    form.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = async (id) => {
    if (confirm("Delete this form?")) {
      await Form.delete(id);
      loadForms();
    }
  };

  const getFormUrl = (formId) => {
    return `${window.location.origin}${createPageUrl("FormView")}?id=${formId}`;
  };

  const copyUrl = (formId) => {
    navigator.clipboard.writeText(getFormUrl(formId));
    alert("URL copied!");
  };

  const statusColors = {
    draft: "bg-gray-100 text-gray-700",
    published: "bg-green-100 text-green-700",
    archived: "bg-orange-100 text-orange-700"
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Forms</h1>
            <p className="text-gray-600 mt-1">Create and manage your forms</p>
          </div>
          <Link to={createPageUrl("FormBuilder")}>
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              <Plus className="w-4 h-4 mr-2" />
              New Form
            </Button>
          </Link>
        </div>

        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search forms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredForms.map((form) => (
            <Card key={form.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{form.title}</h3>
                  <Badge className={statusColors[form.status]}>
                    {form.status}
                  </Badge>
                </div>

                <p className="text-sm text-gray-500 mb-4">
                  {form.description || "No description"}
                </p>

                <div className="text-xs text-gray-400 mb-4">
                  {form.schema?.fields?.length || 0} fields • {form.submission_count || 0} submissions
                </div>

                <div className="text-xs text-gray-400 mb-4">
                  {format(new Date(form.created_date), "MMM d, yyyy")}
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => navigate(`${createPageUrl("FormBuilder")}?id=${form.id}`)}
                  >
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyUrl(form.id)}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(form.id)}
                    className="text-red-600"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredForms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">No forms found</p>
            <Link to={createPageUrl("FormBuilder")}>
              <Button className="bg-indigo-600 hover:bg-indigo-700">
                <Plus className="w-4 h-4 mr-2" />
                Create First Form
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}