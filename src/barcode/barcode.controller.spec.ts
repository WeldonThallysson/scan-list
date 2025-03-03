import { Test, TestingModule } from '@nestjs/testing';
import { BarcodeController } from './barcode.controller';
import { BarcodeService } from './barcode.service';

describe('BarcodeController', () => {
  let controller: BarcodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BarcodeController],
      providers: [
          {
                  provide: BarcodeService,
                  useValue: {
                    findAll: jest.fn(), 
                    findDetails: jest.fn(),
                    create: jest.fn(),
                    update: jest.fn(),
                    remove: jest.fn(),
                  },
                },
      ],
  
    }).compile();

    controller = module.get<BarcodeController>(BarcodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
