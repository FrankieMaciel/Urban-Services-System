export type RequestE = {
    id: number;
    requestType: number;
    adress: string;
    description: string;
    applicantName: string;
    applicantCpf: string;
    status: string;
  };

export type RequestTypeE = {
    id: number;
    requestName: string;
}