import { ItemDto } from '#common/dto/item.dto';
import { AppPagination } from '#common/classes/pagination';

export class CatalogueDto extends AppPagination<ItemDto> {}
