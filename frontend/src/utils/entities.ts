export type RequestE = {
    id: number;
    requestTypeId: number;
    adress: string;
    description: string;
    applicantId: number;
    status: string;
  };


export type ApplicantE = {
    id: number;
    name: string;
    fiscalId: string;
};

export type RequestTypeE = {
    id: number;
    requestName: string;
}