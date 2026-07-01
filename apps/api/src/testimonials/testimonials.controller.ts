import { Controller, Get, Query } from '@nestjs/common'
import { TestimonialsService } from './testimonials.service'

@Controller('testimonials')
export class TestimonialsController {
  constructor(private readonly testimonialsService: TestimonialsService) {}

  @Get()
  findAll(@Query('limit') limit?: string) {
    const n = limit ? parseInt(limit, 10) : undefined
    return n ? this.testimonialsService.findRecent(n) : this.testimonialsService.findAll()
  }
}
