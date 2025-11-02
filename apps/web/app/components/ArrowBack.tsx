import Link from "next/link";
import { ArrowLeft, ChevronLeft } from "lucide-react";
const ArrowBack = () => {
    return (
        <div>
            <Link href="/">
                <ArrowLeft className="w-6 h-6" />
            </Link>
        </div>
    );
};

export default ArrowBack;