import { ItemDto } from '#common/dto/item.dto';

export class TradeofferDto {
  id: number;
  offered_item: ItemDto;
  desired_item: ItemDto;
}
