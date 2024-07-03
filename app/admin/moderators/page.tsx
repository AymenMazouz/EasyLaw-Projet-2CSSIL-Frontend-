import Image from "next/image";
import Link from "next/link";
import { Button } from "@components/ui/button";
import IMAGES from "@config/images";
import getModerators from "@actions/getModerators";
import AdminModeratorsDataTable from "@components/admin/Moderators management/data-table";

const page = async () => {
  const moderators = await getModerators();

  if (!moderators) {
    return (
      <div className="flex flex-col gap-6 justify-center items-center">
        <Image
          src={IMAGES.SEARCH_ERROR}
          alt="Search error"
          width={300}
          height={300}
        />
        <p className="text-center text-sm bg-red-200 rounded-md max-w-[40ch] text-red-600 p-2">
          يرجى التحقق من البيانات المدخلة
        </p>
        <Link href={`/admin/moderators`}>
          <Button>الذهاب إلى الصفحة الرئيسية</Button>
        </Link>
      </div>
    );
  }
  return (
    <div className="text-primary">
      <div className="w-full flex  p-4 justify-between">
        <h1 className="font-bold lg:text-3xl text-2xl">إدارة المسيرين</h1>
        <Link href="./moderators/addModerator">
        <Button>إضافة مسير</Button>
        </Link>
      </div>
      <AdminModeratorsDataTable data={moderators} />
    </div>
  );
};

export default page;
