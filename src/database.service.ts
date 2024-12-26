import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
@Injectable()
export class DatabaseService implements OnApplicationBootstrap {
  private readonly logger = new Logger(DatabaseService.name);
  constructor() {}
  onApplicationBootstrap(): any {
    this.logger.log(`DatabaseService initialized for connection`);
  }
}
