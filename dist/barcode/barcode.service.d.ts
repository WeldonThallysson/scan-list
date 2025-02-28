import { Barcode } from './barcode.model';
import { IResponseApi } from 'src/interfaces/interface.response.message';
import { IParamsBarcode } from 'src/interfaces/interface.barcode';
export declare class BarcodeService {
    private barcodeModel;
    constructor(barcodeModel: typeof Barcode);
    create(item: Barcode): Promise<IResponseApi>;
    findAll(filters: {
        code?: string | null;
        description?: string | null;
    }): Promise<Barcode[]>;
    findDetails(id: number): Promise<Barcode | null>;
    update(item: IParamsBarcode): Promise<IResponseApi>;
    delete(id: number): Promise<IResponseApi>;
}
