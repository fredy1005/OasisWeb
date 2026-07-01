import { Module } from '@nestjs/common'
import { FaqModule } from './faq/faq.module'
import { BlogModule } from './blog/blog.module'
import { TestimonialsModule } from './testimonials/testimonials.module'
import { ContactModule } from './contact/contact.module'

@Module({
  imports: [FaqModule, BlogModule, TestimonialsModule, ContactModule],
})
export class AppModule {}
