import { ChannelFilter } from "../models/channel-filter.model";
import { IPagination } from "./pagination.interface";

export interface IBuilder  {
    setFilter(filter: ChannelFilter): this;
    setPagination<T>(pagination: IPagination<T>): this;
    build(): void ;
}