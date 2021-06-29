import { ChannelDetail } from './channel-detail.interface';
import { Genre } from './genre.interface';

export interface Channels {
  total: string;
  channelDetails: ChannelDetail[];
  genres: Genre[];
}
