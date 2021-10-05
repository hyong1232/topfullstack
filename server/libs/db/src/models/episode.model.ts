import { ApiProperty } from "@nestjs/swagger";
import { modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({
    schemaOptions:{
        timestamps: true,
    }
})
export class Episode {
    @ApiProperty({ description: '课时名称', example: 'name1'})
    @prop()
    name: string;

    @ApiProperty({ description: '课时文件路径', example: 'http://url.mp4'})
    @prop()
    file: string;
}