import React, { useState, useEffect } from "react";
import { Form } from "@/entities/Form";
import { FormSubmission } from "@/entities/FormSubmission";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { format } from "date-fns";

export default function Submissions() {
  const [forms, setForms] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const [selectedFormId, setSelectedFormId] = useState("");

  useEffect(() => {
    loadForms();
  }, []);

  useEffect(() => {
    if (selectedFormId) loadSubmissions();
  }, [selectedFormId]);

  const loadForms = async () => {
    const data = await Form.list("-created_date");
    setForms(data);
    if (data.length > 0) setSelectedFormId(data[0].id);
  };

  const loadSubmissions = async () => {
    const all = await FormSubmission.list("-submitted_at");
    setSubmissions(all.filter(s => s.form_id === selectedFormId));
  };

  const downloadCSV = () => {
    const form = forms.find(f => f.id === selectedFormId);
    if (!form || submissions.length === 0) return;

    const headers = form.schema.fields.map(f => f.label);
    const rows = submissions.map(sub =>
      form.schema.fields.map(f => sub.data[f.id] || "")
    );

    const csv = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${form.title}-submissions.csv`;
    a.click();
  };

  const selectedForm = forms.find(f => f.id === selectedFormId);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Submissions</h1>
            <p className="text-gray-600 mt-1">View form responses</p>
          </div>
          <Button onClick={downloadCSV} disabled={submissions.length === 0} variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
        </div>

        <Card className="mb-6">
          <CardContent className="p-4">
            <Select value={selectedFormId} onValueChange={setSelectedFormId}>
              <SelectTrigger>
                <SelectValue placeholder="Select form..." />
              </SelectTrigger>
              <SelectContent>
                {forms.map(form => (
                  <SelectItem key={form.id} value={form.id}>
                    {form.title} ({form.submission_count || 0})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {selectedForm && (
          <Card>
            <CardHeader className="border-b">
              <h2 className="text-xl font-semibold">{selectedForm.title}</h2>
            </CardHeader>
            <CardContent className="p-6">
              {submissions.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  No submissions yet
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      {selectedForm.schema.fields?.map(f => (
                        <TableHead key={f.id}>{f.label}</TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {submissions.map(sub => (
                      <TableRow key={sub.id}>
                        <TableCell>
                          {format(new Date(sub.submitted_at), "MMM d, yyyy")}
                        </TableCell>
                        {selectedForm.schema.fields?.map(f => (
                          <TableCell key={f.id}>
                            {typeof sub.data[f.id] === 'boolean' 
                              ? (sub.data[f.id] ? 'Yes' : 'No')
                              : (sub.data[f.id] || '-')}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
