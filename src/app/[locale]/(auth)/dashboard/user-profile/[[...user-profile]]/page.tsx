// import { getI18nPath } from '@/utils/Helpers';
// import { UserProfile } from '@clerk/nextjs';
import { getTranslations } from 'next-intl/server';

type IUserProfilePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IUserProfilePageProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'UserProfile',
  });

  return {
    title: t('meta_title'),
  };
}

export default async function UserProfilePage(props: IUserProfilePageProps) {
  const { locale } = await props.params;

  return (
    <div className="my-6 -ml-16">
      user profile
    </div>
  );
};
