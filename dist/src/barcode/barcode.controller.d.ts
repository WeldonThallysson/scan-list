import { BarcodeService } from './barcode.service';
import { Barcode } from './barcode.model';
import { IResponseApi } from 'src/interfaces/interface.response.message';
import { IParamsBarcode, IParamsRegister } from 'src/interfaces/interface.barcode';
interface IRequest {
    user: {
        id: number;
        email: string;
    };
}
export declare class BarcodeController {
    private readonly barcodeService;
    constructor(barcodeService: BarcodeService);
    create(req: IRequest, item: IParamsRegister): Promise<IResponseApi>;
    findAll(code?: string, description?: string): Promise<Barcode[]>;
    findDetails(id: number): Promise<Barcode | null>;
    update(req: IRequest, item: IParamsBarcode): Promise<IResponseApi>;
    delete(id: number): Promise<IResponseApi>;
}
export {};
