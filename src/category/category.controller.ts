import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Patch,
} from "@nestjs/common";
import { CategoryService } from "src/category/category.service";
import { CreateCategoryDto } from "src/category/dto/create-kuryer.dto";
import { Category } from "src/category/models/category.models";
import { UpdateCategoryDto } from "src/category/dto/update-kuryer.dto";

@Controller("company")
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async createCategory(
    @Body() createCategoryDto: CreateCategoryDto
  ): Promise<Category> {
    return this.categoryService.createCategory(createCategoryDto);
  }

  @Get()
  async getAllCompanies(): Promise<Category[]> {
    return this.categoryService.getAllCategory();
  }

  @Get(":id")
  async getCompaniesById(@Param("id") id: number): Promise<Category | null> {
    return this.categoryService.getCategoryById(id);
  }

  @Delete(":id")
  async removeCompaniesById(@Param("id") id: number): Promise<string> {
    return this.categoryService.removeCategoryById(id);
  }

  @Patch(":id")
  async updateCompaniesById(
    @Param("id") id: number,
    @Body() updateCategoryDto: UpdateCategoryDto
  ) {
    return this.categoryService.updateCategoryById(id, updateCategoryDto);
  }
}
