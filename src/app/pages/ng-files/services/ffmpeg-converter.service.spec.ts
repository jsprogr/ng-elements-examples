import { TestBed } from '@angular/core/testing';

import { FfmpegConverterService } from './ffmpeg-converter.service';

describe('FfmpegConverterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FfmpegConverterService = TestBed.get(FfmpegConverterService);
    expect(service).toBeTruthy();
  });
});
