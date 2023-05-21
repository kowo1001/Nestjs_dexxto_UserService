import { Controller } from '@nestjs/common';

@Controller({ host: 'api.example.com'})
export class ApiController {
    @Get() // 같은 루 경ㅗ
    index(): string {
        return 'Hello, API'; // 다른 응답
    }
}
