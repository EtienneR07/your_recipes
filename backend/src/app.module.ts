import { Module } from '@nestjs/common';
import { AuthModule } from './controllers/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [
    AuthModule,
    RecipesModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI)],
  providers: [],
})
export class AppModule { }
