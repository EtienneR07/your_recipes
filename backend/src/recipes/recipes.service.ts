
import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateRecipeDto } from './dtos/create-recipe.dto';
import { Recipe, RecipeDocument } from './schemas/recipe.schema';

@Injectable()
export class RecipesService {
    constructor(@InjectModel(Recipe.name) private model: Model<Recipe>) { }

    async create(dto: CreateRecipeDto): Promise<RecipeDocument> {
        const createdRecipe = new this.model(dto);

        return createdRecipe.save();
    }

    async get(id: string): Promise<RecipeDocument> {
        const recipe = await this.model.findOne({ _id: id }).exec();

        if (!recipe) throw new NotFoundException(`Recipe with ID ${id} not found`);

        return recipe;
    }
}
