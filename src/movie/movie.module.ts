import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypegooseModule } from 'nestjs-typegoose'
import { TelegramModule } from 'src/telegram/telegram.module'
import { TelegramService } from 'src/telegram/telegram.service'
import { MovieController } from './movie.controller'
import { MovieModel } from './movie.model'
import { MovieService } from './movie.service'

@Module({
	imports: [
		TypegooseModule.forFeature([
			{ typegooseClass: MovieModel, schemaOptions: { collection: 'Movie' } }
		]),
		TelegramModule,
		ConfigModule
	],
	controllers: [MovieController],
	providers: [MovieService, TelegramService, ConfigService],
	exports: [MovieService]
})
export class MovieModule {}
