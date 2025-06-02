export class CreateRequestDto {
    requestTypeId: number;
    adress: string;
    description?: string;
    applicantName: string;
    applicantCpf: string;
    status: string;
}
