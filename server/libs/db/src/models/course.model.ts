import { ApiProperty } from "@nestjs/swagger";
import { modelOptions, Prop, prop, Ref } from "@typegoose/typegoose";
import { Episode } from "./episode.model";

@modelOptions({
    schemaOptions:{
        timestamps: true,
    }
})
export class Course {
    @ApiProperty({ description: '课程名称', example: 'course1'})
    @prop()
    name: string;

    @ApiProperty({ description: '课程封面路径', example: 'http://cover1.img'})
    @prop()
    cover: string;

    @Prop({
        ref: 'Episode'
    })
    episodes: Ref<Episode> []
}