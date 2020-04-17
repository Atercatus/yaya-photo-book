import * as S from './styles';
import { PhotoCardProp } from './type/photo-card-prop';

const PhotoCard = ({ source }: PhotoCardProp) => (
  <S.PhotoCard>
    <S.Photo src={source} />
  </S.PhotoCard>
);

export default PhotoCard;
