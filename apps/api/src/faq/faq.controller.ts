import { Controller, Get, Param } from '@nestjs/common'
import { FaqService } from './faq.service'

@Controller('faqs')
export class FaqController {
  constructor(private readonly faqService: FaqService) {}

  @Get()
  findAll() {
    return this.faqService.findAll()
  }

  @Get('categorias')
  getCategories() {
    return this.faqService.getCategories()
  }

  @Get(':categoria')
  findByCategory(@Param('categoria') categoria: string) {
    return this.faqService.findByCategory(categoria)
  }
}
