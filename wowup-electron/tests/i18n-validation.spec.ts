import { TestBed, waitForAsync } from "@angular/core/testing";
import { Observable, of } from "rxjs";
import * as fs from "fs";
import {
  TranslateModule,
  TranslateLoader,
  TranslateCompiler,
  TranslateService,
} from "@ngx-translate/core";
import { TranslateMessageFormatCompiler } from "ngx-translate-messageformat-compiler";

let TRANSLATIONS = {};
const files = fs.readdirSync("src/assets/i18n");

class JsonTranslationLoader implements TranslateLoader {
  getTranslation(code: string = ""): Observable<object> {
    return of(TRANSLATIONS[code.toUpperCase()]);
  }
}

(async () => {
  for (const file of files) {
    const lang = file.split(".")[0];
    const data = await import(`src/assets/i18n/${file}`);
    TRANSLATIONS[lang.toUpperCase()] = data;
  }

  describe("i18n:", () => {
    let service: TranslateService;

    beforeEach(
      waitForAsync(() => {
        TestBed.configureTestingModule({
          imports: [
            TranslateModule.forRoot({
              loader: {
                provide: TranslateLoader,
                useClass: JsonTranslationLoader,
              },
              compiler: {
                provide: TranslateCompiler,
                useClass: TranslateMessageFormatCompiler,
              },
              useDefaultLang: false,
            }),
          ],
        });

        service = TestBed.get(TranslateService);
      })
    );

    Object.keys(TRANSLATIONS).forEach((lang) => {
      const language = lang.toLowerCase();

      describe(`${language}:`, () => {
        beforeEach(() => {
          service.use(language);
        });

        it("should compile", async () => {
          // Arbitrary key to translate
          // ICU formatting errors will fail to compile, and return the key instead
          const translateKey = "PAGES.ABOUT.TITLE";
          expect(translateKey).not.toBe(service.instant(translateKey));
        });
      });
    });
  });
})();
