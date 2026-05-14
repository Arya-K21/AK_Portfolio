"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { designFolders, DesignFolder, DesignItem } from "../designData";
import styles from "./design-gallery.module.css";

/* ─── Helper: Get Image URLs ───────────────────────────────── */
function getDisplayImages(item: DesignItem, size: number = 800): string[] {
    if (item.images && item.images.length > 0) return item.images;
    if (item.imagePath) return [item.imagePath];
    if (item.driveLink && item.driveLink.includes("drive.google.com")) {
        const match = item.driveLink.match(/\/d\/([a-zA-Z0-9_-]+)/) || item.driveLink.match(/id=([a-zA-Z0-9_-]+)/);
        if (match && match[1]) {
            return [`https://drive.google.com/thumbnail?id=${match[1]}&sz=w${size}`];
        }
    }
    return [];
}

/* ─── Lightbox ─────────────────────────────────────────────── */
function Lightbox({
    item,
    accentColor,
    onClose,
}: {
    item: DesignItem;
    accentColor: string;
    onClose: () => void;
}) {
    // Close on Escape key
    useEffect(() => {
        const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [onClose]);

    return (
        <div className={styles.lightboxBackdrop} onClick={onClose} role="dialog" aria-modal="true">
            <div className={styles.lightboxPanel} onClick={(e) => e.stopPropagation()}>
                {/* Close button */}
                <button className={styles.lightboxClose} onClick={onClose} aria-label="Close">✕</button>

                {/* Images — vertically stacked for multi-slide carousels */}
                {getDisplayImages(item, 1200).length > 0 ? (
                    <div className={styles.lightboxImageWrap}>
                        {getDisplayImages(item, 1200).map((imgUrl, idx) => (
                            <img
                                key={idx}
                                src={imgUrl}
                                alt={`${item.title} - Slide ${idx + 1}`}
                                className={styles.lightboxImage}
                                loading="lazy"
                                decoding="async"
                            />
                        ))}
                    </div>
                ) : (
                    <div className={styles.lightboxNoImage}>No preview available</div>
                )}

                {/* Footer */}
                <div className={styles.lightboxFooter}>
                    <p className={styles.lightboxTitle}>{item.title}</p>
                    {item.driveLink && (
                        <a
                            href={item.driveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.lightboxDriveBtn}
                            style={{ "--folder-accent": accentColor } as React.CSSProperties}
                        >
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                            Open source
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

/* ─── Folder Grid ──────────────────────────────────────────── */
function FolderGrid({ onSelect }: { onSelect: (id: string) => void }) {
    return (
        <div className={styles.gridSection}>
            <div className={styles.pageHeader}>
                <Link href="/projects" className={styles.backBtn}>← Projects</Link>
                <span className={styles.pageLabel}>Design Gallery</span>
                <p className={styles.pageSubtitle}>Posters · Thumbnails · Graphics &amp; more</p>
            </div>

            <div className={styles.folderGrid}>
                {designFolders.map((folder) => (
                    <button
                        key={folder.id}
                        className={styles.folderCard}
                        style={{ "--folder-accent": folder.accentColor } as React.CSSProperties}
                        onClick={() => onSelect(folder.id)}
                    >
                        <div className={styles.folderGlowBar} />

                        <div className={styles.folderTop}>
                            <span className={styles.folderIcon}>{folder.icon}</span>
                            <span className={styles.folderCount}>
                                {folder.items.length} design{folder.items.length !== 1 ? "s" : ""}
                            </span>
                        </div>

                        <h3 className={styles.folderName}>{folder.name}</h3>
                        <p className={styles.folderDesc}>{folder.description}</p>

                        {/* Only show preview thumbs for items that have an image */}
                        {folder.items.filter((i) => getDisplayImages(i, 200).length > 0).length > 0 && (
                            <div className={styles.previewStrip}>
                                {folder.items
                                    .filter((i) => getDisplayImages(i, 200).length > 0)
                                    .slice(0, 3)
                                    .map((item) => (
                                        <div key={item.id} className={styles.previewThumb}>
                                            <img
                                                src={getDisplayImages(item, 200)[0]}
                                                alt={item.title}
                                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        </div>
                                    ))}
                            </div>
                        )}

                        <div className={styles.folderArrow}>Open →</div>
                    </button>
                ))}
            </div>
        </div>
    );
}

/* ─── Open Folder View ─────────────────────────────────────── */
function FolderView({ folder, onBack }: { folder: DesignFolder; onBack: () => void }) {
    const [lightboxItem, setLightboxItem] = useState<DesignItem | null>(null);
    const closeLightbox = useCallback(() => setLightboxItem(null), []);

    return (
        <>
            <div className={styles.folderViewSection}>
                <div className={styles.breadcrumb}>
                    <button className={styles.breadcrumbBack} onClick={onBack}>← Gallery</button>
                    <span className={styles.breadcrumbSep}>/</span>
                    <span className={styles.breadcrumbCurrent} style={{ color: folder.accentColor }}>
                        {folder.icon} {folder.name}
                    </span>
                </div>

                {folder.items.length === 0 ? (
                    <div className={styles.emptyState}>
                        <span>📂</span>
                        <p>
                            No designs yet — drop your PNGs into{" "}
                            <code>/public/design/{folder.id}/</code> and update{" "}
                            <code>designData.ts</code>.
                        </p>
                    </div>
                ) : (
                    <div className={styles.imageGrid}>
                        {folder.items.map((item) => (
                            <DesignCard
                                key={item.id}
                                item={item}
                                accentColor={folder.accentColor}
                            />
                        ))}
                    </div>
                )}
            </div>

            {lightboxItem && (
                <Lightbox
                    item={lightboxItem}
                    accentColor={folder.accentColor}
                    onClose={closeLightbox}
                />
            )}
        </>
    );
}

/* ─── Individual Design Card ───────────────────────────────── */
function DesignCard({
    item,
    accentColor,
}: {
    item: DesignItem;
    accentColor: string;
}) {
    return (
        <div
            className={styles.designCard}
            style={{ "--folder-accent": accentColor } as React.CSSProperties}
        >
            <div className={styles.designImageWrap}>
                {getDisplayImages(item, 600).length > 0 ? (
                    <img
                        src={getDisplayImages(item, 600)[0]}
                        alt={item.title}
                        className={styles.cardImage}
                        loading="lazy"
                        decoding="async"
                    />
                ) : (
                    <div className={styles.noImagePlaceholder}>
                        <span>{item.title}</span>
                    </div>
                )}
                <div className={styles.designOverlay}>
                    {item.driveLink && (
                        <a href={item.driveLink} target="_blank" rel="noopener noreferrer" className={styles.overlayAction}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                            {item.driveLink.includes("canva.link") || item.driveLink.includes("canva.com") 
                                ? "Open in Canva" 
                                : item.driveLink.includes("figma.com") 
                                ? "Open in Figma" 
                                : item.driveLink.includes("drive.google.com") 
                                ? "Open in Drive" 
                                : "Open Link"}
                        </a>
                    )}
                </div>
            </div>
            <p className={styles.designTitle}>{item.title}</p>
        </div>
    );
}

/* ─── Main Export ──────────────────────────────────────────── */
export default function DesignGallery() {
    const [selectedFolderId, setSelectedFolderId] = useState<string | null>(null);
    const selectedFolder = designFolders.find((f) => f.id === selectedFolderId) ?? null;

    return (
        <div className={styles.pageContainer}>
            {selectedFolder ? (
                <FolderView folder={selectedFolder} onBack={() => setSelectedFolderId(null)} />
            ) : (
                <FolderGrid onSelect={setSelectedFolderId} />
            )}
        </div>
    );
}
