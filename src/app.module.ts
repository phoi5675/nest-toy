import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ApiController } from './api/api.controller';
import { EmailService } from './email/email.service';

@Module({
  imports: [UsersModule],
  controllers: [ApiController],
  providers: [EmailService],
})
export class AppModule {}
