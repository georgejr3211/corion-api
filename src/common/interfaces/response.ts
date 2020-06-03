export class ResultResponse {
  total?: number;
  status?: number;
  message?: string | object;

  error: boolean;
  data: any[];

  constructor({ data, error, total, status, message }) {
    this.data = data;
    this.error = error;
    this.total = total;
    this.status = status;
    this.message = message;
  }
}