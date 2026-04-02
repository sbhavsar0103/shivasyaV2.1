import {
    Phone,
    Mail,
    MapPin,
    Facebook,
    Instagram,
    MessageCircle
} from "lucide-react";
import { Link } from "react-router-dom";

export default function MiniNavbar() {
    return (
        <div className="w-full bg-[#3D1F14] text-white text-xs sm:text-sm">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 py-2 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">

                {/* Left info */}
                <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-5">
                    <div className="flex items-center gap-1">
                        <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>+91 7567981608</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>services@shivasya.in</span>
                    </div>

                    <div className="hidden lg:flex items-center gap-1">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>Navrangpura, Ahmedabad, Gujarat 380009</span>
                    </div>
                </div>

                {/* Right social icons */}
                <div className="flex items-center justify-center gap-3 sm:gap-4">
                    <a
                        href="https://wa.me/message/FZN2DAMDZCISK1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-70"
                    >
                        <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                    </a>

                    <a
                        href="https://www.facebook.com/share/17DahFaa27/?mibextid=wwXIfr"
                        className="hover:opacity-70"
                    >
                        <Facebook className="w-3 h-3 sm:w-4 sm:h-4" />
                    </a>

                    <a
                        href="https://www.instagram.com/shivasya_services?igsh=MWJzamx3Nmo5ZHRjbg=="
                        className="hover:opacity-70"
                    >
                        <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
                    </a>

                    <a
                        href="mailto:services@shivasya.in"
                        className="hover:opacity-70"
                    >
                        <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                    </a>
                </div>
            </div>
        </div>
    );
}