import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getFunc(): string {
    return 'Response!';
  }
}
