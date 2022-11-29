import { ItemDto } from '#common/dto/item.dto';
import { AppPagination } from '#common/classes/pagination';

export class ItemsListDto extends AppPagination<ItemDto> {}
