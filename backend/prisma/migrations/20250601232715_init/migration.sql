-- CreateTable
CREATE TABLE "Request" (
    "id" SERIAL NOT NULL,
    "requestTypeId" INTEGER NOT NULL,
    "adress" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "applicantName" VARCHAR(255) NOT NULL,
    "applicantCpf" VARCHAR(11) NOT NULL,
    "status" VARCHAR(50) NOT NULL DEFAULT 'pendente',

    CONSTRAINT "Request_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RequestType" (
    "id" SERIAL NOT NULL,
    "requestName" TEXT NOT NULL,

    CONSTRAINT "RequestType_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_requestTypeId_fkey" FOREIGN KEY ("requestTypeId") REFERENCES "RequestType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
