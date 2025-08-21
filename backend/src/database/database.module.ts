import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import mongodbConfig from 'src/config/mongodb.config';

@Module({
  imports: [
    ConfigModule.forFeature(mongodbConfig),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('mongodb.uri'),
        dbName: configService.get('mongodb.dbName'),
        user: configService.get('mongodb.user'),
        pass: configService.get('mongodb.pass'),
        authSource: configService.get('mongodb.authSource'),
      }),
    }),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
