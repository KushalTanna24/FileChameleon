export type Action = {
  file: any;
  file_name: string;
  file_size: number;
  from: string;
  to: String | null;
  fileType: string;
  isConverting?: boolean;
  isConverted?: boolean;
  hasError?: boolean;
  url?: any;
  output?: any;
};
