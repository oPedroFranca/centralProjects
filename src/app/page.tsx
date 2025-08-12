import { HeaderPagesTitle } from '@/components/HeaderPagesTitle';
import { BiPlus } from 'react-icons/bi';

import * as S from './styles';

export default function Home() {
  return (
    <>
      <HeaderPagesTitle
        title="Qualquer Nome"
        description="Gerencie e acompanhe seus projetos pessoais"
        buttons={
          <S.Button>
            <BiPlus className="h-4 w-4 m-auto" />
            <span>Novo Projeto</span>
          </S.Button>
        }
      />
    </>
  );
}
