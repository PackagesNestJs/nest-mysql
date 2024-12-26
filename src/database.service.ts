import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { DATABASE_CONFIG } from '@app/database/database.config';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class DatabaseService implements OnApplicationBootstrap {
  private readonly logger = new Logger(DatabaseService.name);
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}
  onApplicationBootstrap(): any {
    this.logger.log(
      `DatabaseService initialized for connection ${DATABASE_CONFIG.connectionName}`,
    );
  }
}
