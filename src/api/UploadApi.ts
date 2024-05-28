import instance from './instance';

export default function uploadFile(file: File): Promise<string> {
  const formData = new FormData();
  formData.append('file', file);
  return instance.post('/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}
