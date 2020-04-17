import Layout from '../../components/layout';
import * as S from './styles';
import Headline from '../../components/headline';
import PhotoDashboard from '../../components/photo-dashboard';

const Main = () => (
  <Layout>
    <Headline />
    <S.Content>
      <S.Subhead>MOMENTS</S.Subhead>
      <PhotoDashboard />
    </S.Content>
  </Layout>
);

export default Main;
