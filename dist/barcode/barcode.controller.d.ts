import { BarcodeService } from './barcode.service';
import { Barcode } from './barcode.model';
import { IResponseApi } from 'src/interfaces/interface.response.message';
import { IParamsBarcode } from 'src/interfaces/interface.barcode';
export declare class BarcodeController {
    private readonly barcodeService;
    constructor(barcodeService: BarcodeService);
    create(item: Barcode): Promise<IResponseApi>;
    findAll(code?: string, description?: string): Promise<Barcode[]>;
    findDetails(id: number): Promise<Barcode | null>;
    update(id: number, item: IParamsBarcode): Promise<IResponseApi>;
    delete(id: number): Promise<IResponseApi>;
}
