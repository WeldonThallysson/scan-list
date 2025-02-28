export interface IBarcodeAttributes {
    id?: number;
    code: string;
    description?: string | null;
    scannedDate?: string;
    scannedAt: Date;
    userId: number;
}
export interface IParamsRegister {
    code: string;
    userId: number;
}
export interface IParamsEdit {
    id?: number;
    code: string;
    description?: string | null;
    userId: number;
}
export interface IParamsBarcode {
    id?: number;
    code: string;
    description?: string | null;
    userId: number;
}
