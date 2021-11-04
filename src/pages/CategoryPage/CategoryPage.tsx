import { FC } from 'react';

// eslint-disable-next-line import/no-internal-modules
import { Core } from '../../modules/Layout';

interface Props {
  title: string;
}

export const CategoryPage: FC<Props> = (props) => {
  const { title } = props;
    return (
        <Core>
          <div>{title}</div>
        </Core>
    );
}
