# NestJs Database MySQL
## Name
Database MySQL NestJs

## Description
Let people know what your project can do specifically. Provide context and add a link to any reference visitors might be unfamiliar with. A list of Features or a Background subsection can also be added here. If there are alternatives to your project, this is a good place to list differentiating factors.

## Author
```text
    Name: TaiLT
    Email: tientai***@gmail.com
```
## Installation
***Yarn***
```bash
  yarn add @tailt9/nestjs-mysql
```

***NPM***
```bash
  npm install @tailt9/nestjs-mysql --save
```

## Usage

```typescript
import { Module } from '@nestjs/common';
import { DatabaseModule } from '@tailt9/nestjs-mysql';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env',
        }),
        DatabaseModule.register({ name: 'db_auth' }),
    ],
    controllers: [],
    providers: [],
})
export class AuthModule {}

```
Options:
```typescript
interface DBModuleOptions {
  name: string
}
```
## Support

## Roadmap

## License
