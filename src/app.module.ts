import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ReservationModule } from './reservation/reservation.module';
import { ResourceModule } from './resource/resource.module';
import { InventoryModule } from './inventory/inventory.module';
import { TypeOfResourceModule } from './type-of-resource/type-of-resource.module';
import { GenreModule } from './genre/genre.module';
import { AuthorModule } from './author/author.module';
import { RightModule } from './right/right.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { RoleModule } from './role/role.module';
import { LoanModule } from './loan/loan.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UserModule,
    ReservationModule,
    ResourceModule,
    InventoryModule,
    TypeOfResourceModule,
    GenreModule,
    AuthorModule,
    RightModule,
    SubscriptionModule,
    RoleModule,
    LoanModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'admin123',
      password: 'admin123',
      database: 'biblioweb',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
