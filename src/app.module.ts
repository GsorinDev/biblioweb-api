import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ReservationModule } from './reservation/reservation.module';
import { ResourceModule } from './resource/resource.module';
import { TypeOfResourceModule } from './type-of-resource/type-of-resource.module';
import { GenreModule } from './genre/genre.module';
import { AuthorModule } from './author/author.module';
import { RightModule } from './right/right.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { RoleModule } from './role/role.module';
import { LoanModule } from './loan/loan.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { Reservation } from './reservation/entities/reservation.entity';
import { Resource } from './resource/entities/resource.entity';
import { TypeOfResource } from './type-of-resource/entities/type-of-resource.entity';
import { Genre } from './genre/entities/genre.entity';
import { Author } from './author/entities/author.entity';
import { Right } from './right/entities/right.entity';
import { Subscription } from './subscription/entities/subscription.entity';
import { Role } from './role/entities/role.entity';
import { Loan } from './loan/entities/loan.entity';
import * as process from "process";

@Module({
  imports: [
    UserModule,
    ReservationModule,
    ResourceModule,
    TypeOfResourceModule,
    GenreModule,
    AuthorModule,
    RightModule,
    SubscriptionModule,
    RoleModule,
    LoanModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.URL ? process.env.URL : 'localhost',
      port: Number(process.env.PORT ? process.env.PORT : 3307),
      username: process.env.USERNAME ? process.env.USERNAME : 'admin123',
      password: process.env.PASSWORD ? process.env.PASSWORD : 'admin123',
      database: 'biblioweb',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([
      Genre,
      Resource,
      TypeOfResource,
      Author,
      Loan,
      Role,
      Right,
      Reservation,
      User,
      Subscription,
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
