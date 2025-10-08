import React, { useState, useEffect } from "react";
import { Form } from "@/entities/Form";
import { FormSubmission } from "@/entities/FormSubmission";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Send } from "lucide-react";

export default function FormView() {
  const [form, setForm] = useState(null);
  const [values, setValues] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    loadForm();
  }, []);

  const loadForm = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    if (id) {
      const forms = await Form.list();
      const found = forms.find(f => f.id === id);
      setForm(found);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validate required fields
    for (const field of form.schema.fields) {
      if (field.required && !values[field.id]) {
        setError(`${field.label} is required`);
        return;
      }
    }

    // Submit to custom URL if provided
    if (form.submit_url) {
      await fetch(form.submit_url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      });
    }

    // Save submission
    await FormSubmission.create({
      form_id: form.id,
      data: values,
      submitted_at: new Date().toISOString()
    });

    // Update count
    await Form.update(form.id, {
      submission_count: (form.submission_count || 0) + 1
    });

    setSubmitted(true);
  };

  if (!form) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <Card className="max-w-md">
          <CardContent className="p-8 text-center">
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
            <p className="text-gray-600">Your form has been submitted.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="border-b p-8">
          <h1 className="text-3xl font-bold">{form.title}</h1>
          {form.description && <p className="text-gray-600 mt-2">{form.description}</p>}
        </CardHeader>
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {form.schema.fields?.map((field) => (
              <div key={field.id}>
                {field.type === "text" && (
                  <>
                    <Label>{field.label}{field.required && <span className="text-red-500">*</span>}</Label>
                    <Input
                      placeholder={field.placeholder}
                      value={values[field.id] || ""}
                      onChange={(e) => setValues({ ...values, [field.id]: e.target.value })}
                    />
                  </>
                )}

                {field.type === "email" && (
                  <>
                    <Label>{field.label}{field.required && <span className="text-red-500">*</span>}</Label>
                    <Input
                      type="email"
                      placeholder={field.placeholder}
                      value={values[field.id] || ""}
                      onChange={(e) => setValues({ ...values, [field.id]: e.target.value })}
                    />
                  </>
                )}

                {field.type === "number" && (
                  <>
                    <Label>{field.label}{field.required && <span className="text-red-500">*</span>}</Label>
                    <Input
                      type="number"
                      placeholder={field.placeholder}
                      value={values[field.id] || ""}
                      onChange={(e) => setValues({ ...values, [field.id]: e.target.value })}
                    />
                  </>
                )}

                {field.type === "textarea" && (
                  <>
                    <Label>{field.label}{field.required && <span className="text-red-500">*</span>}</Label>
                    <Textarea
                      placeholder={field.placeholder}
                      value={values[field.id] || ""}
                      onChange={(e) => setValues({ ...values, [field.id]: e.target.value })}
                      className="h-24"
                    />
                  </>
                )}

                {field.type === "select" && (
                  <>
                    <Label>{field.label}{field.required && <span className="text-red-500">*</span>}</Label>
                    <Select
                      value={values[field.id] || ""}
                      onValueChange={(val) => setValues({ ...values, [field.id]: val })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        {field.options?.map((opt, i) => (
                          <SelectItem key={i} value={opt}>{opt}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </>
                )}

                {field.type === "checkbox" && (
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id={field.id}
                      checked={values[field.id] || false}
                      onCheckedChange={(checked) => setValues({ ...values, [field.id]: checked })}
                    />
                    <Label htmlFor={field.id}>{field.label}{field.required && <span className="text-red-500">*</span>}</Label>
                  </div>
                )}

                {field.type === "radio" && (
                  <>
                    <Label>{field.label}{field.required && <span className="text-red-500">*</span>}</Label>
                    <RadioGroup
                      value={values[field.id] || ""}
                      onValueChange={(val) => setValues({ ...values, [field.id]: val })}
                    >
                      {field.options?.map((opt, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <RadioGroupItem value={opt} id={`${field.id}-${i}`} />
                          <Label htmlFor={`${field.id}-${i}`}>{opt}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </>
                )}
              </div>
            ))}

            {error && <div className="text-red-600 text-sm">{error}</div>}

            <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
              <Send className="w-4 h-4 mr-2" />
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}