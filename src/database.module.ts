import { DynamicModule, Module } from '@nestjs/common';
import { DatabaseService } from '@app/database/database.service';
import { ConfigService } from '@nestjs/config';
import { DBModuleOptions } from '@app/database/database.interface';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [ConfigService, DatabaseService],
  exports: [DatabaseService, TypeOrmModule],
})
export class DatabaseModule {
  static register({ name }: DBModuleOptions): DynamicModule {
    return {
      module: DatabaseModule,
      imports: [
        TypeOrmModule.forRootAsync({
          name,
          inject: [ConfigService],
          useFactory: async (configService: ConfigService) => ({
            type: 'mysql',
            host: configService.get('DB_HOST', 'localhost'),
            port: configService.get<number>('DB_PORT', 3306),
            username: configService.get<string>('DB_USER', 'root'),
            password: configService.get<string>('DB_PASSWORD', 'password'),
            database: configService.get<string>('DB_NAME', 'default_db'),
            autoLoadEntities: configService.get<boolean>(
              'DB_AUT_ENTITIES',
              true,
            ),
            synchronize: configService.get<boolean>('DB_SYNCHRONIZE', false),
          }),
        }),
      ],
      exports: [TypeOrmModule],
    };
  }
}
