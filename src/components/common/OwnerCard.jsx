// src/components/common/OwnerCard.jsx
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { getInitials } from '../../utils/formatters';

export default function OwnerCard({ owner }) {
  return (
    <div className="flex flex-col md:flex-row overflow-hidden rounded-2xl border border-slate-200 bg-white">
      {/* Photo */}
      <div className="md:w-1/3 bg-navy-800 flex items-center justify-center shrink-0">
        {owner.image ? (
          <img
            src={owner.image}
            alt={owner.name}
            className="w-full h-full object-cover min-h-[300px]"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <span
          className={`text-white text-4xl font-bold ${owner.image ? 'hidden' : 'flex'} items-center justify-center w-full h-full min-h-[300px]`}
          style={{ display: owner.image ? 'none' : 'flex' }}
        >
          {getInitials(owner.name)}
        </span>
      </div>

      {/* Info */}
      <div className="p-8 md:p-10 flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-navy-800 font-[family-name:var(--font-heading)]">
          {owner.name}
        </h3>
        <p className="text-gold-400 font-medium text-base mb-4">{owner.designation || owner.role}</p>
        <p className="text-slate-600 text-base leading-relaxed mb-8 max-w-2xl">{owner.bio}</p>

        {/* Social */}
        <div className="flex items-center gap-5">
          {owner.social?.facebook && (
            <a href={owner.social.facebook} target="_blank" rel="noopener noreferrer" className="text-navy-800 hover:text-gold-400" aria-label="Facebook">
              <FaFacebook size={22} />
            </a>
          )}
          {owner.social?.instagram && (
            <a href={owner.social.instagram} target="_blank" rel="noopener noreferrer" className="text-navy-800 hover:text-gold-400" aria-label="Instagram">
              <FaInstagram size={22} />
            </a>
          )}
          {owner.social?.twitter && (
            <a href={owner.social.twitter} target="_blank" rel="noopener noreferrer" className="text-navy-800 hover:text-gold-400" aria-label="Twitter">
              <FaTwitter size={22} />
            </a>
          )}
          {owner.social?.linkedin && (
            <a href={owner.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-navy-800 hover:text-gold-400" aria-label="LinkedIn">
              <FaLinkedin size={22} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
