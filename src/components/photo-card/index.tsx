import * as S from './styles';
import { PhotoCardProps } from './type/photo-card-props';

const PhotoCard = ({ source }: PhotoCardProps) => (
  <S.PhotoCard>
    <S.Photo src={source} />
  </S.PhotoCard>
);

export default PhotoCard;
