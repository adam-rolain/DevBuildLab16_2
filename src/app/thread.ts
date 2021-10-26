import { Post } from "./post";

export interface Thread {
    data: {
        children: Post[]
    }
}
